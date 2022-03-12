//create objects
const playerData = {
    player1:{
    fullName: "Lebron James",
    team: "Los Angeles Lakers",
    PPG: 29.3,
    AST: 7.4,
    REB: 7.5,  
  },
    player2:{
    fullName: "Ja Morant",
    team: "Memphis Grizzles",
    PPG: 27.5,
    AST: 6.7,
    REB: 5.8,
    },
    player3:{
    fullName: "Luka Doncic",
    team: "Dallas Mavericks",
    PPG: 28.0,
    AST: 8.7,
    REB: 9.2
    }
    
    }
  //function to render out table header
    function getrenderHeaderHtml(){
      return `<th> Name </th>
          <th> Team </th>
          <th> PPG </th>
          <th> AST </th>
          <th> REB </th>
        </tr>`
    }
  
  //constructor function for objects
  function Players(data){
    Object.assign(this,data)
    //pull var from objects for use
    this.getPlayerHtml =function(){
     const{fullName, team, PPG, AST, REB } =this
    
    //returns html for player table layout
  
     return `
     <tr>
     <td> ${fullName} </td>
             <td> ${team} </td>
             <td> ${PPG} </td>
             <td> ${AST} </td>
             <td> ${REB} </td>
             </tr>
             `
    
  }
  }
  document.getElementById("chart-el").innerHTML =getrenderHeaderHtml()
  
  const LebronJames = new Players(playerData.player1)
  const JaMorant = new Players(playerData.player2)
  const LukaDoncic = new Players(playerData.player3)
  
  console.log(LukaDoncic)
  
  function renderPlayers(){
  document.getElementById("chart-el").innerHTML += LebronJames.getPlayerHtml()
  document.getElementById("chart-el").innerHTML += JaMorant.getPlayerHtml()
  document.getElementById("chart-el").innerHTML += LukaDoncic.getPlayerHtml()
  }
  
  renderPlayers()
  
  
  
  