var movies = [
    { name: "godzella", src: "images/s-1.jpg" },
    { name: "star wars", src: "images/s-2.jpg" },
    { name: "beauty  and the beast", src: "images/s-3.jpg" },
    { name: "ready player one ", src: "images/s-4.jpg" },
];

function render(arr) {
    for (var i = 0; i < arr.length; i++) {
        $("#autoWidth").append(`
         <li class="item-a">
                    <div class="showcase-box">
                        <img src="${arr[i].src}" />
                    </div>
                </li>
    `);
    }
}
render(movies);

function search() {
    var name = $("#search").val();
    var f = [];
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].name.includes(name)) {
            f.push(movies[i]);
        }
    }
    console.log(name, f);
    $("#autoWidth").empty();
    render(f);
}
