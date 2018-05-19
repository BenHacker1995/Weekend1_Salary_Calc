let employees = []; // empty employees array

class Employee{
    constructor( firstName, lastName, ID, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = ID;
        this.title = title;
       this.salary = salary;
    } // end constructor
} // end Employee

$( document ).ready( function(){
    $( '.input' ).val( '' );
    $( '.outputEl' ).remove();
    // let totalMonthly = 0;
    let totalOutput = $( '#outputAmount' );
    document.getElementById( 'outputAmount' ).innerHTML = '<h3>Total Monthly: 0</h3>' ;
    $('#submitButton').on( 'click', function() {
            // push new Employee inputs into employees array
            employees.push( new Employee( $( '#firstName' ).val(), 
                                            $( '#lastName' ).val(), 
                                            $('#ID').val(),
                                            $('#title').val(),
                                            parseInt( $('#salary').val() ) ) );
            console.log( employees );
            runOutput();
            $('.input').val(''); // clear inputs on inputButton click
    });
});

function runOutput() {
    let output = $( '#outputTable' );
    $( '.outputEl' ).empty(); // empty data for new input
    let totalMonthly = 0;
    for (employee of employees ){
        // add table row
        let outputVal = `<tr id="${employee.firstName} ${employee.lastName}" class="outputEl">`;
            outputVal += '<td>' + employee.firstName + '</td>';
            outputVal += '<td>' + employee.lastName + '</td>';
            outputVal += '<td>' + employee.ID + '</td>';
            outputVal += '<td>' + employee.title + '</td>';
            outputVal += '<td>' + employee.salary + '</td>';
            outputVal += `<td><button id="${employee.firstName} ${employee.lastName}">Delete</button></td>`
        outputVal += '</tr>';
        output.append( outputVal );
        totalMonthly += employee.salary;
    } // end for
    // append total monthly expenses
    document.getElementById( 'outputAmount' ).innerHTML = '<h3>Total Monthly: ' + totalMonthly + '</h3>';
    if ( totalMonthly > 20000 ) {
        document.getElementById( 'outputAmount' ).style.color = "red";
    } // end if
} // end runOutput
