/*Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus 
dan bersifat privat. Artinya objek lain tidak bisa mengakses atau mengubah nilai 
dari property secara langsung. Pada contoh kasus Mail kita tidak bisa langsung 
mengubah daftar contact, namun kita bisa menambahkannya melalui fungsi saat 
kirim pesan atau mengambil data tersebut melalui method showAllContacts.*/

class Mail{
    constructor(author) {
        this._contacts = [];
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

console.log(showAllContacts()); 