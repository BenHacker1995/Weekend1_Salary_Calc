let employees = []; // empty employees array
let totalMonthly = 0;

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
            totalMonthly += parseInt( $('#salary').val() );
            document.getElementById( 'outputAmount' ).innerHTML = '<h3>Total Monthly: ' + totalMonthly+ '</h3>';
            if ( totalMonthly > 20000 ) {
                document.getElementById( 'outputAmount' ).style.color = "red";
            } // end if
            $('.input').val(''); // clear inputs on inputButton click
    });

        $('table').on('click', 'input[type="button"]', function(){
            totalMonthly -= ($(this).closest('#salary')).val();
            document.getElementById( 'outputAmount' ).innerHTML = '<h3>Total Monthly: ' + totalMonthly+ '</h3>';
            $(this).closest('tr').empty();

    });
});


function runOutput() {
    // add table row
    let outputVal = `<tr id="${$('#firstName').val()}"class="outputEl">`
        outputVal += '<td class="outputEl">' + $('#firstName').val() + '</td>';
        outputVal += '<td class="outputEl">' + $('#lastName').val() + '</td>';
        outputVal += '<td class="outputEl">' + $('#ID').val() + '</td>';
        outputVal += '<td class="outputEl">' + $('#title').val() + '</td>';
        outputVal += '<td class="outputEl">' + parseInt( $('#salary').val() ) + '</td>';
        outputVal += '<td class="outputEl"><input type="button" value="Delete" class="btn-default"></td>';
        outputVal += '</tr>';
    $('tr:empty').remove();
    $('#inputOut').append( outputVal );
    // append total monthly expenses

} // end runOutput

function deleteRow() {
    // console.log('in deleteRow');
    
    
}
// function on click
// removes current row entirely