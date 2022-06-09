var url = "bd/crud.php";

var app = new Vue({
    el: "#app",
    data: {
        moviles: [],
        marca: "",
        modelo: "",
        stock: "",
        total: 0,
    },
    methods: {
        //BOTONES        
        addContent: async function() {
            const { value: formValues } = await Swal.fire({
                title: 'New mobile',
                html: '<input id="marca" type="text" class="swal2-input" placeholder="Book name">' +
                    '<input id="modelo" type="text" class="swal2-input" placeholder="Author">' +
                    '<input id="stock" type="text" class="swal2-input" placeholder="Langage">',
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: 'Save',
                confirmButtonColor: '#1cc88a',
                preConfirm: () => {
                    return [
                        this.marca = document.getElementById('marca').value,
                        this.modelo = document.getElementById('modelo').value,
                        this.stock = document.getElementById('stock').value
                    ]
                }
            })
            if (this.marca == "" || this.modelo == "" || this.stock == 0) {
                Swal.fire({
                    type: 'info',
                    title: 'Incomplete data',
                })
            } else {
                this.altaMovil();
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'succes',
                    title: 'Product added with success !'
                })
            }
        },
        btnEdit: async function(id, marca, modelo, stock) {
            await Swal.fire({
                title: 'Edit',
                html: '<input id="marca" type="text" class="swal2-input" value="' + marca + '">' +
                    '<input id="modelo" type="text" class="swal2-input" value="' + modelo + '">' +
                    '<input id="stock" type="text" class="swal2-input" value="' + stock + '">',
                focusConfirm: false,
                showCancelButton: true,
            }).then((result) => {
                if (result.value) {
                    marca = document.getElementById('marca').value,
                        modelo = document.getElementById('modelo').value,
                        stock = document.getElementById('stock').value,

                        this.editMovil(id, marca, modelo, stock);
                    Swal.fire(
                        '¡Actualizado!',
                        'El registro ha sido actualizado.',
                        'success'
                    )
                }
            });
        },
        btnDelete: function(id) {
            Swal.fire({
                title: "Do you really want to delete the item: " + id + "?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '3085d6',
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.value) {
                    this.deleteMovil(id);
                    Swal.fire(
                        'Deleted',
                        'The item has been deleted ',
                        'success'
                    )
                }
            });
        },

        //PROCEDIMIENTOS para el CRUD     
        listarMoviles: function() {
            axios.post(url, { opcion: 4 }).then(response => {
                this.moviles = response.data;
            });
        },
        //Procedimiento CREAR.
        altaMovil: function() {
            axios.post(url, { opcion: 1, marca: this.marca, modelo: this.modelo, stock: this.stock }).then(response => {
                this.listarMoviles();
            });
            this.marca = "",
                this.modelo = "",
                this.stock = 0
        },
        //Procedimiento EDITAR.
        editMovil: function(id, marca, modelo, stock) {
            axios.post(url, { opcion: 2, id: id, marca: marca, modelo: modelo, stock: stock }).then(response => {
                this.listarMoviles();
            });
        },
        //Procedimiento BORRAR.
        deleteMovil: function(id) {
            axios.post(url, { opcion: 3, id: id }).then(response => {
                this.listarMoviles();
            });
        }
    },
    created: function() {
        this.listarMoviles();
    },
    computed: {
        totalStock() {
            this.total = 0;
            for (movil of this.moviles) {
                this.total = this.total + parseInt(movil.stock);
            }
            return this.total;
        }
    }
});