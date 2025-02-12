document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Kopi hijau', img: 'coffe-bean1.jpg', price: 30000},
            { id: 2, name: 'Kopi coklat', img: 'coffe-bean2.jpg', price: 40000},
            { id: 3, name: 'Kopi plain', img: 'coffe-bean3.jpg', price: 25000},
            { id: 4, name: 'Kopi Mocha', img: 'coffe-bean4.jpg', price: 35000},
            { id: 5, name: 'Kopi hitam', img: 'coffe-bean5.jpeg', price: 20000},
        ],
    }));
    
    //bikin keranjang belanjanya fungsional 
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek udh ad brg nya blm di cart
            const IsCart= this.items.find((item) => item.id === newItem.id);

            if(!IsCart) { //cart kosong
                this.items.push({...newItem, quantity:1, total: newItem.price}); //buat masukin ke array items
                this.quantity++;
                this.total += newItem.price;
            }
            else { //cart beda atau sama
                this.items = this.items.map((item) => {
                    //kalo barangnya beda
                    if (item.id !== newItem.id) {
                        return item;
                    }
                    else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // ambil item berdasarkan id
            const cartItem = this.items.find((item) => item.id === id);
            //jika item lbh dri 1
            if(cartItem.quantity >1) { //liat satu satu
                this.items = this.items.map((item) => {
                    //jika bukan barang nya
                    if(item.id!==id) {
                        return item;
                    }
                    else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            }
            else if (cartItem.quantity === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });
});


// form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form= document.querySelector('#checkout-form');
form.addEventListener('keyup', function() {
    for(let i = 0; i< form.elements.length; i++) {
        if(form.elements[i].value.length !== 0) {
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        } 
        else {
            return false;
        }
    }
    checkoutButton.disabled=false;
    checkoutButton.classList.remove('disabled');
});

//kirim data ketika tombol checkout dikirim
checkoutButton.addEventListener('click', function(e) {
    e.preventDefault();
    const formData =  new FormData(form);
    const data = new URLSearchParams(formData);
    const objdata = Object.fromEntries(data);
    const message  = formatmessage(objdata);
    window.open('http://wa.me/6287874701949?text=' + encodeURIComponent(message));
});

// format pesanan (message)
const formatmessage = (obj) => {
    let itemsList = JSON.parse(obj.items)
        .map((item) => `${item.name} (${item.quantity} x ${money(item.price)})`)
        .join("\n");

    return `Data Customer
Nama: ${obj.name}
Email: ${obj.email}
Phone: ${obj.Phone}

Data Pesanan
${itemsList}

TOTAL: ${money(obj.total)}
Gomawooo.`;
};


// konversi ke rupiah
const money= (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number);
};

