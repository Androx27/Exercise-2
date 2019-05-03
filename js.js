// ambil variabel dari input
function screen(val)
        {
        document.getElementById("box").value=val;
        }

// masukin nilai
function nomor(val)   {
        document.getElementById("box").value+=val;
        }

// operasi huehue
function solve() { 
    try     { 
            screen(eval(document.getElementById("box").value)) 
            } 
    catch(e) {
            screen('Error') 
            } 
                 }
// hapus layar
function clearme() {
                document.getElementById("box").value = "";
                } 
// backspace
function delback() {
                var nilaibutuh = document.getElementById("box").value;
                var finalnilaibutuh = nilaibutuh.substr(0, nilaibutuh.length-1); 
                document.getElementById("box").value=finalnilaibutuh;
                
                } 