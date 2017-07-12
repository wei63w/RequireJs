require.config(
        {
            paths: {
                'jquery': 'jquery-1.9.0.min',//写路径左边别名,右边路径, 不带.js后缀
                'otherOne':'otherOne'
            }
        }
    );
    
    
    
    require(['jquery'],function ($) {//所有依赖jquery的js代码都必须写在该模块下面
             $(document).on('click','#dv',function(){
                alert('dv clicked');
             });
    });
    
	require(['otherOne'],function(otherone){//引入otherOne.js 的代码, 也就是加载otherOne.js的代码
		
	});
