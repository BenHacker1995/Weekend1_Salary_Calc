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

//     function onInputClick() {
//     // push new Employee inputs into employees array
//     console.log('in onInputClick');

//     employees.push( new Employee( $( '#firstName' ).val(), 
//                                     $( '#lastName' ).val(), 
//                                     $('#ID').val(),
//                                     $('#title').val(),
//                                     parseInt( $('#salary').val() ) ) );
//     console.log( employees );
//     let output = $('#outputTable');
//     // append new employee to table
//     for (employee of employees ){
//         output.not(':first').empty();
//         let outputVal = '<tr class="outputEl">';
//             outputVal += '<td>' + employee.firstName + '</td>';
//             outputVal += '<td>' + employee.lastName + '</td>';
//             outputVal += '<td>' + employee.ID + '</td>';
//             outputVal += '<td>' + employee.title + '</td>';
//             outputVal += '<td>' + employee.salary + '</td>';
//         outputVal += '</tr>';
//         // outputVal += '</tbody>';
//         output.append( outputVal );
//     }
//     $('#input').val(''); // clear inputs on inputButton click
// }



function readyNow() {
    // $('#input').val('');
    // $('.outputEl').remove();
    
    // $('#submitButton').on( 'click', onInputClick())
}

$( document ).ready( function(){
    // readyNow();
    
    $('#input').val('');
    $('.outputEl').remove();
    $('#submitButton').on( 'click', function() {
            // push new Employee inputs into employees array
            console.log('in onInputClick');
        
            employees.push( new Employee( $( '#firstName' ).val(), 
                                            $( '#lastName' ).val(), 
                                            $('#ID').val(),
                                            $('#title').val(),
                                            parseInt( $('#salary').val() ) ) );
            console.log( employees );
            let output = $('#outputTable');
            // append new employee to table
            for (employee of employees ){
                output.not(':first').empty();
                let outputVal = '<tr class="outputEl">';
                    outputVal += '<td>' + employee.firstName + '</td>';
                    outputVal += '<td>' + employee.lastName + '</td>';
                    outputVal += '<td>' + employee.ID + '</td>';
                    outputVal += '<td>' + employee.title + '</td>';
                    outputVal += '<td>' + employee.salary + '</td>';
                outputVal += '</tr>';
                // outputVal += '</tbody>';
                output.append( outputVal );
            }
            $('#input').val(''); // clear inputs on inputButton click
    });
});
