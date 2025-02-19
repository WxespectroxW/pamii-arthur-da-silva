<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form>
    <div class="Form">
  <label for="Cod etec">Cod etec</label><br>
  <input type="number" id="Cod etec" name="Cod etec"><br>
  <label for="RM">RM</label><br>
  <input type="number" id="RM" name="RM">
  <label for="Senha">Senha</label><br>
  <input type="text" id="Senha" name="Senha">
  </div>
</form>

<button type="button" class="button-styled">Entra nessa porra</button>

<style>
  .button-styled {
    background-color: #2c2c2c;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .button-styled:hover {
    background-color: #0000;
  }

  .Form {
    margin: 4px 2px;
    padding: 15px 32px;
    
  }
</style>
</body>
</html>