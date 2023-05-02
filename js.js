let projects =[];

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
    //right here  clear local and then update 
    localStorage.clear();
    storeItems(projects);
    showProjects();
   
    //clear values 
    name.val('');
    typeProject.val('');
    dueDate.val('');

}
function showProjects(){
    //create tbody and append to table
    removebody();
    tbody = $('<tbody>');
    tbody.attr('id','tbody');
    $('#myTable').append(tbody);
    //read from local storage
    stored = getItems();
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
        clearB = $('<button>')
        clearB.text("remove").addClass('removeB').attr('data-index',i);//add data-index
        row.append(nameData,typeData,dueData,clearB);

    }
    console.log(projects);
    
}
function removebody (){
    $('#tbody').remove();
};
function removeElement(){
     //get the data-index
    const index = $(this).attr('data-index');
    //mutate array
    projects.splice(index,1);
    //push to stored 
    localStorage.clear();
    storeItems(projects);
    //display to main
    showProjects();    
};
function storeItems(projects){
    localStorage.setItem("stored", JSON.stringify(projects));
};
function getItems(){
    let stored = localStorage.getItem('stored');
    if(stored){
        stored = JSON.parse(stored);
    }else{
        stored = [];
    }
    return stored;
}
function init(){
    projects = getItems();
    
    setInterval(displayTime, 1000);
    
    showProjects();

    $('#submitB').on('click', getProject);
    $('#myTable').on('click','.removeB',removeElement);
    $(function () {
        $("#datepicker").datepicker({
            // showOn: "button",
            // buttonImage: "images/calendar.gif",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
    });
}

init();