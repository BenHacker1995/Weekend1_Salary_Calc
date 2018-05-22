let employees = []; // empty employees array
let employeeCount = 0;
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
    document.getElementById( 'outputAmount' ).innerHTML = '<h3>Total Monthly: ' + totalMonthly + '</h3>' ;
    $('#submitButton').on( 'click', function() {
            // push new Employee inputs into employees array
        if ( $('#firstName').val() === '' ||
             $('#lastName').val() === '' ||
             $('#ID').val() === '' ||
             $('#title').val() === '' ||
             $('#salary').val() === '' ) {
            alert('Invalid Input');
            $('.input').val('');
        }
        else {
            if ( parseInt( $('#salary').val() ) === 0 ){
                $('#salary').val( 0 );
            }
            employees.push( new Employee( $( '#firstName' ).val(), 
                                        $( '#lastName' ).val(), 
                                        $('#ID').val(),
                                        $('#title').val(),
                                        parseInt( $('#salary').val() ) ) );
            runOutput();
            totalMonthly += parseInt( $('#salary').val() );
            document.getElementById( 'outputAmount' ).innerHTML = '<h3>Total Monthly: ' + totalMonthly+ '</h3>';
            if ( totalMonthly > 20000 ) {
                document.getElementById( 'outputAmount' ).style.color = "red";
            } // end if            
            $('.input').val(''); // clear inputs on inputButton click
        }
    });

        $('table').on('click', 'input[type="button"]', function(){
            // let closestSal = jQuery.data($(this).closest($('.Salary')));
            let closestSal = $(this).closest('tr').find('.Salary').text();
            let indexOut = $(this).closest('tr').index('tr');
            
            indexOut --;

            employees.splice(indexOut, 1);
            totalMonthly -= parseInt(closestSal);      
            document.getElementById( 'outputAmount' ).innerHTML = '<h3>Total Monthly: ' + totalMonthly + '</h3>';
            $(this).closest('tr').empty();

    });
});


function runOutput() {
    // add table row
    let outputVal = `<tr id="${employeeCount}"class="outputEl">`
        outputVal += `<td id="First${employeeCount}" class="First">` + $('#firstName').val() + '</td>';
        outputVal += `<td id="Last${employeeCount}" class="Last">` + $('#lastName').val() + '</td>';
        outputVal += `<td id="ID${employeeCount}" class="ID">` + $('#ID').val() + '</td>';
        outputVal += `<td id="Title${employeeCount}" class="Title">` + $('#title').val() + '</td>';
        outputVal += `<td id="Salary${employeeCount}" class="Salary">` + parseInt( $('#salary').val() ) + '</td>';
        outputVal += `<td id="Button${employeeCount}" class="Button"><input type="button" value="Delete" class="btn-default"></td>`;
        outputVal += '</tr>';
    employeeCount ++;
    $('tr:empty').remove();
    $('#inputOut').append( outputVal );
} // end runOutput