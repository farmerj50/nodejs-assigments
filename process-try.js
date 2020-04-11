const fs = require("fs")
//const prompt = require('prompt-sync')
const prompt = require('prompt')
// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//const argv = require('yargs').argv
//const readMe = fs.readFileSync('JSON.txt, 'utf8').split('\n');
allFiles = []

const data = fs.writeFile('newfile.txt', 'Hello World!!!', function(err) {
    if(err) throw err;
    // for(i = 0; i < allFiles.length; i++){
    //     data.push(allFiles)
    //console.log(data)
    // }
    
})
    
prompt.start();

prompt.get(['file'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log(result);        
try {
    if(fs.existsSync(result)) {
        console.log("The file exists");
        prompt.get(['please provide new file name'], function(err, data){
            if (err) { return onErr(err); }
            console.log('Command-line input received:');
            console.log(data);
            fs.appendFile.toString(data, 'You are Awesome!!!', function(err) {
                if(err) throw err;
                // for(i = 0; i < data.length; i++){
                //     if(process.data === !allFiles)
                //     allFiles++
                // }
                allFiles.push(data);
                console.log(allFiles);
                return allFiles;
            })
        })             
       
    } else {
        console.log('The file does not exist.');
        fs.writeFile.toString(data, 'You are Awesome!!!',)
        // allFiles.push(`${result}`)
        // console.log(allFiles);
    } 
} catch (err) {
    console.error(err);
}
    
});