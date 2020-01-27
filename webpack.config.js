const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
    console.log(env);

    const {mode = "development"} = env;
    const isProd = mode === "production";
    const isDev = mode === "development";
    const getStyleLoader = () =>{
        return [
            isProd ? MiniCssExtractPlugin.loader : "style-loader", 
            "css-loader"
        ];
    };
    const getPlugins = () =>{
        const plugins =  [
            new HtmlWebpackPlugin({
                title: "fugr-ru",
                buildTime: isDev ? new Date().toString() : "",
                template: "./public/index.html"
            })
        ]

        if (isProd){
            plugins.push(new MiniCssExtractPlugin({
                filename: "main-[hash:8].css",
                
            }))
        }
        return plugins
    }

    return {
        mode: isProd ? "production" : isDev && "development",
        output : {
            filename : isProd ? "main-[hash:8].js" : undefined
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: "/node_modules/",
                    loader: "babel-loader"
                },
                {
                    test: /\.json$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "app",
                                name: "[name]-1.[ext]"
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|ico)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "images",
                                name: "[name]-[sha1:hash:7].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|otf)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "fonts",
                                name: "[name].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: getStyleLoader()
                },
                {
                    test: /\.(s[ca]ss)$/,
                    use: [...getStyleLoader(), "sass-loader"]
                }
            ]
        },
        plugins: getPlugins(),
        devServer: {
            open: false,
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000,
            watchContentBase: true,
            historyApiFallback: true,
            progress: true 
        }
    };
};