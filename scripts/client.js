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
    // let deleteButton = $('button .deleteButton');
    $('.button').on( 'click', function() {
        // deleteRow();
        // $( this ).closest( 'td' ).find( '.delete' ).remove();
        console.log('in deleteRow');
    });
});

// let deleteButton = '<tr><table class="deleteButtons"><tr><td><button class="delete">Delete</button></td></tr></table>'
// let deleteButton = '<tr><td><button class="delete">Delete</button></td></tr>';

function runOutput() {
    $( '.output' ).empty(); // empty data for new input
    let totalMonthly = 0;
    for (employee of employees ){
        // outputButton.append( deleteButton );
        // add table row
        let outputVal = `<tr id="${employee.firstName}.${employee.lastName}">`;
            outputVal += '<td class="output">' + employee.firstName + '</td>';
            outputVal += '<td class="output">' + employee.lastName + '</td>';
            outputVal += '<td class="output">' + employee.ID + '</td>';
            outputVal += '<td class="output">' + employee.title + '</td>';
            outputVal += '<td class="output">' + employee.salary + '</td>';
            outputVal += '<td class+"deleteButtons"><button class="button">Delete</button></td>'
        outputVal += '</tr>';
        // $('.deleteButtons').append( deleteButton );
        $('#inputOut').append( outputVal );
        totalMonthly += employee.salary;
    } // end for
    // $('#deleteButtons').append( deleteButton );
    // append total monthly expenses
    document.getElementById( 'outputAmount' ).innerHTML = '<h3>Total Monthly: ' + totalMonthly + '</h3>';
    if ( totalMonthly > 20000 ) {
        document.getElementById( 'outputAmount' ).style.color = "red";
    } // end if
} // end runOutput

function deleteRow() {
    // console.log('in deleteRow');
    
    
}
// function on click
// removes current row entirely