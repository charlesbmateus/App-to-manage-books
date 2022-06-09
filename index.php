<!doctype html>
<html>

<head>
    <link rel="shortcut icon" href="#" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- FontAwesom CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <!--Sweet Alert 2 -->
    <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">
    <!--CSS custom -->
</head>

<body>
    <header>
        <h2 class="text-center text-dark"><span>Book stock application</span></h2>
    </header>

    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col">
                    <button @click="addContent" title="Create a new content" class="btn btn-primary">Add</button>
                </div>
                <div class="col text-right">
                    <h5>Stock Total: <span class="badge badge-primary">{{totalStock}}</span></h5>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Language</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of moviles">
                                <td>{{item.marca}}</td>
                                <td>{{item.modelo}}</td>
                                <td>{{item.stock}}</td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <button class="btn btn-secondary" title="Edit" @click="btnEdit(item.id, item.marca, item.modelo, item.stock)"><i class="fas fa-pencil-alt"></i></button>
                                        <button class="btn btn-danger" title="Delte" @click="btnDelete(item.id)"><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <!--Código custom -->
    <script src="main.js"></script>
</body>

</html>