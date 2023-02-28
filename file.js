const fs = require('fs');

////reading files
//fs.writeFile('./docs/blog.txt', 'Happy Monday', () => {
//       console.log('file was written');
//    });
    
////reading files
//fs.writeFile('./docs/blog2.txt', 'Happy Monday', () => {
//       console.log('file was written');
//    });

//directories
    //if(!fs.existsSync('./assets')){
    
    //fs.mkdir('./assets', err => {
    //    if(err){
    //        console.log('folder created');
    //    }
    //});
    //} else {
    //    fs.rmdir('./assets', (err) => {
    //        if(err){
    //            console.log(err)
    //        }
    //        console.log('folder deleted');
    //    })
    //}

    //deleting files
    if(fs.existsSync('./docs/deleteme.txt')){
        fs.unlink('./docs/deleteme.txt', (err) => {
            if (err){
                console.log(err);
            }
            console.log('file deleted');
        })
    }

    