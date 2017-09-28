
let pasajeros =
[
  { nombre : 'Diana',
  apellido: 'Quispe',
  dni: 1111411,
  asiento: 2,
},
{ nombre : 'Diana',
apellido: 'Quispe',
dni: 1111411,
asiento: 2,
},
{ nombre : 'Diana',
apellido: 'Quispe',
dni: 1111411,
asiento: 2,
},
{ nombre : 'Diana',
apellido: 'Quispe',
dni: 1111411,
asiento: 2,
},
{ nombre : 'Diana',
apellido: 'Quispe',
dni: 1111411,
asiento: 2,
},
{ nombre : 'Diana',
apellido: 'Quispe',
dni: 1111411,
asiento: 2,
},
]


function Reserva(props) {
  return( <section className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      <h1>Asientos</h1>
        <table id="tabla" border="2" align="center" >
          <tr>
              <td><button>4</button></td>
              <td><button>8</button></td>
              <td><button>12</button></td>
              <td><button>16</button></td>
              <td><button>20</button></td>
              <td><button>24</button></td>
              <td><button>28</button></td>
              <td><button>32</button></td>
          </tr>
          <tr >
              <td><button>3</button></td>
              <td><button>7</button></td>
              <td><button>11</button></td>
              <td><button>15</button></td>
              <td><button>19</button></td>
              <td><button>23</button></td>
              <td><button>27</button></td>
              <td><button>31</button></td>
         </tr>
            <tr></tr>
            <tr></tr>
           <tr>
            <td><button>2</button></td>
            <td><button>6</button></td>
            <td><button>10</button></td>
            <td><button>14</button></td>
            <td><button>18</button></td>
            <td><button>22</button></td>
            <td><button>26</button></td>
            <td><button>30</button></td>
          </tr>
          <tr>
              <td><button>1</button></td>
              <td><button>5</button></td>
              <td><button>9</button></td>
              <td><button>13</button></td>
              <td><button>17</button></td>
              <td><button>21</button></td>
              <td><button>25</button></td>
              <td><button>29</button></td>
          </tr>	
        </table>
    </div>
  </div>
  
</section> 
/* <div className="row">
  <div className="col-md-12">
    <div>
      <p><b>DNI:</b><input id="buscarInp" type="number"> <span className="btn" id="buscarBtn">Buscar</span> </input> </p>
      <div>
        <p>ASIENTO: <input id="asiento" type="text"  disabled ></input>  </p>
        <p>NOMBRE: <input id="nombre" type="text" ></input>  </p>
        <p>APELLIDO: <input id="apellido" type="text" ></input>  </p>
        <p>DNI: <input id="dni" type="number" ></input> </p>
        <span  className="btn" id="reservar" >RESERVAR</span>
        <span className="btn" id="cancelar" >CANCELAR</span>
        <span className="btn" id="listar" >PASAJEROS</span>			

      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="">
    <div className="" id="listarDiv">
      <table className="tablaLi table-bordered" align="center" >
        <tr>
          <th>NOMBRE</th>
          <th>APELLIDO</th>
          <th>DNI</th>
          <th>ASIENTO</th>
        </tr>
        </table>
    </div>
  </div>
</div> */


)};
ReactDOM.render( 
  <Reserva title="Yo" name="Diana"/>, document.getElementById('root')
);
// const RowTable = (props) => {
//    const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
//    return (
//       <tr>
//          {_tds}
//      </tr> 
//    )
// }

// const RTable = ({seats}) => {
//    return (
//       <table width="300" border="3" classNameName = "table table-bordered">
//          <RowTable items = {seats[0]} />
//          <RowTable items = {seats[1]} />
//          <RowTable items = {seats[2]} />
//          <RowTable items = {seats[3]} />
//       </table>
//    );
// }

// function listPairs (seats) {
//    console.log ("seats: ", seats);
//    let newSeats = [];
//    for ( let row  of seats ) {
//       let filterArray = row.filter ( e => e % 2 == 0);
//       newSeats.push(filterArray); 
//    }
//    return newSeats.map ((row, index) => {
//       return (
//          <li key = {index}> {row} </li>
//       );
//    });
// }
function mapeo () {
  let newAsientos = [];
  let mapArray = pasajeros.map((asientos ) => {
    return ()
  })
}

// const App = ({title, seats}) => {
//    return (
//       <div>
//          <RTable  seats = {seats}/>
       
//          <h3>  {title}</h3>
//          <ol>
//             {listPairs (seats)}
//          </ol>
//       </div>
//    );
// }

// let seats = [
//    [4, 8, 12, 16, 20, 24, 28, 32],
//    [3, 7, 11, 15, 19, 23, 27, 31],
//    [2, 6, 10, 14, 18, 22, 26, 30],
//    [1, 5, 9, 13, 17, 21, 25, 29]
// ]

// ReactDOM.render ( 
//    <App title = {'Hola Mundo!'}  seats = {seats} />, 
//    document.getElementById("root")
// ); 
 