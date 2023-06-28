class News {
    constructor(title, text, tegs, _date) {
        this.Title = title;
        this.Text = text;
        this.ArrTegsrrTegs = tegs;
        this.datUser = new Date(_date);
    }
    print() {
        let strTegs = '';
        var datNow = new Date();
        let dU = this.datUser.getDate();
        let dN = datNow.getDate();


        for (var el of this.ArrTegsrrTegs) {
            strTegs += el + " ";
        }

        if (dU === dN) {
            document.write(
                ` <div style="width: 500px;">
                <h3>${this.Title}</h3>
                <h4>today</h4>
                <p>${this.Text}</p>                  
                <div>
                <a href="#">${strTegs}</a>
                </div>`
            );
        }

        let dateage = dU - dN;

        if (dateage < 7 && dU != dN && dateage > 0) {
            document.write(
                ` <div style="width: 500px;">
                <h3>${this.Title}</h3>
                <h4>${dateage} days age</h4>
                <p>${this.Text}</p>                  
                <div>
                <a href="#">${strTegs}</a>
                </div>`
            );
        }
        if (dateage > 7 && dU != dN || dateage < 0 && dU != dN) {
            let fulldate = this.datUser.getDate() + '.' + (this.datUser.getMonth() + 1) + '.' + this.datUser.getFullYear()
            document.write(
                ` <div style="width: 500px;">
                <h3>${this.Title}</h3>
                <h4>${fulldate}</h4>
                <p>${this.Text}</p>                  
                <div>
                    <a href="#">${strTegs}</a>
                </div>`
            );

        }


    }
}

const news = new News(
    'What is Lorem ipsum?',
    'text',
    ['#lorem1', '#lorem2', '#lorem3'],
    '06/30/2023');
//news.print();
const news2 = new News(
    'What is Lorem ipsum?',
    'text',
    ['#lorem1', '#lorem5', '#lorem3'],
    '06/28/2023');

var obj = {
    arr: [],
    fullPrint: function (arr) {
        if (Array.isArray(arr)) {
            for (var i in arr) {
                let fulldate =
                    arr[i].datUser.getDate() + '.'
                    + (arr[i].datUser.getMonth() + 1) + '.'
                    + arr[i].datUser.getFullYear();

                let strTegs = '';

                for (var el of arr[i].ArrTegsrrTegs) {
                    strTegs += el + " ";
                }

                document.write(
                    ` <div style="width: 500px;">
            <h3>${arr[i].Title}</h3>
            <h4>${fulldate}</h4>
            <p>${arr[i].Text}</p>                  
            <div>
                <a href="#">${strTegs}</a>
            </div>`
                );
            }
        }
    },
    delete: function(index){
        delete this.arr[index];
    },

    // search:function(title_){
    //     //console.log(this.arr.indexOf(title_));
    //     for(var el of this.arr){
    //         console.log(el.indexOf(title_));
    //     }
    //     // for (var i of this.arr){
          
    //     //    console.log( i.indexOf(title_));
           
          
    //     // }
    // }


}
obj.arr = [news, news2];
//obj.fullPrint(obj.arr);
console.log(obj.arr);
//obj.delete(0);
console.log(obj.arr);
//console.log(obj.search('text'));
obj.search('text')


