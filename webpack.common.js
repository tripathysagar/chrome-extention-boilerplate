const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    
    entry: {
        popup: path.resolve('src/popup/popup.tsx'),
        options: path.resolve('src/options/options.tsx'),
        background: path.resolve('src/background/background.ts'),
        contentScript: path.resolve('src/contentScript/contentScript.ts')
    },  
    module: {
        rules: [
            {
                use: 'ts-loader', // use this to load ts file to js
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader'], // for css stufff
                test: /\.css$/i,
            },
            {
                type: 'asset/resource',
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false // clean up the dist build iff build is diderent form dev to prod or prod to dev
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/static'),
                    to: path.resolve('dist')
                }
            ]
        }),
        ...getHTMLPlugins([
            "popup",
            "options"
        ])
    ],
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist')
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}


function getHTMLPlugins(chunks){
    return chunks.map(chunk => new HTMLPlugin({
        title: "react action",
        filename: `${chunk}.html`,
        chunks: [chunk]
    }));
}
