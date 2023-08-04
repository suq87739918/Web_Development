//create button element before h1
$("h1").before("<button>created before h1</button>");

//create button element after h1
$("h1").after("<button>created after h1</button>");

//create button element prepemd h1
$("h1").prepend("<button>created prepend h1</button>");

//create button element append h1
$("h1").append("<button>created append h1</button>");

//prepend会在被选择的元素之前创建内容，但是这个创建的内容是在被选择元素这个block之内的，before()方法创建的内容是在这之外的， append()方法同理

/*

最初： <h1>Hello</h1>
before(): <button>created before h1</button><h1>Hello</h1>
after(): <h1>Hello</h1><button>created after h1</button>
prepend(): <h1><button>created prepend h1</button>Hello</h1>
append(): <h1>Hello<button>created append h1</button></h1>

*/
