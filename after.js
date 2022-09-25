
function run() {
    console.log('hello');
    let name = "";
    try {
        urlp = []; s = location.toString().split('?'); s = s[1].split('&'); for (i = 0; i < s.length; i++) { u = s[i].split('='); urlp[u[0]] = u[1]; }
        name = decodeURI(urlp['name']);
    } catch (error) {
        name = "missing"
    }
    console.log(name)

    try {

    document.getElementById('content').innerHTML =
        document.getElementById('content').innerHTML.replace("ben shapiro", name)
    } catch(error){}
    
    let array = document.getElementsByClassName('nextlink')
    for (let index = 0; index < array.length; index++) {
        array[index].href = array[index].href.concat("?name=" + name);   
    }
}