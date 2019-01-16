module.exports = {
    entry:{
        app:'./app.js'
    },
    output:{
        filename:'[name].[hash:8].js'
    },
    module:{
        rules:[ //数组中每一项可以是规则 
            {
                test:/\.js$/, 
                use:{ //符合上面正则的文件将进行use的格式处理
                    loader:'babel-loader',
                },
                exclude:'/node_modules/'//排除在规则之外的
            }
        ]
    }
}