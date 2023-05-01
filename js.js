




//remove project function
let projects = [];

function displayTime(){
    //display time in header box
    const today = dayjs();
    const current = $('#time').text(today.format('MMM D, YYYY h:mm:ss a'));
}


//get all the input
function getProject(){
    //get the name
    const name = $('#projectName');
    //get the type of project
    const typeProject = $('#typeProject');
    //get due date
    const dueDate = $('#datepicker');
    
    const project = {
        name: name.val(),
        type: typeProject.val(),
        due: dueDate.val()
    };
    projects.push(project);
    localStorage.setItem("stored",JSON.stringify(projects));
    //clear values 
    name.val('');
    typeProject.val('');
    dueDate.val('');
    showProjects();

}
function showProjects(){
    //create tbody and append to table
    removebody();
    tbody = $('<tbody>');
    tbody.attr('id','tbody');
    $('#myTable').append(tbody);
    //read from local storage
    let stored = JSON.parse(localStorage.getItem('stored'));
    //for looop
    for (let i = 0; i <stored.length; i++){
        //create table row
         row = $('<tr>');
         tbody.append(row);
        //add table data
        nameData = $('<td>').text(stored[i].name);
        typeData = $('<td>').text(stored[i].type);
        dueData = $('<td>').text(stored[i].due);
        //add clear button
        clearB = $('<button>').text("remove").attr('class','removeB');
        row.append(nameData,typeData,dueData,clearB);

    }
    
}
function removebody (){
    $('#tbody').remove();
}


setInterval(function () {
    displayTime();
}, 1000);

showProjects();
$('#submitB').on('click', getProject);
$('#myTable').on('click','.removeB',function(){
    $(this).parent().remove();
    //update local storage
})