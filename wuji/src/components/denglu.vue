<template>
    <div class="divda">
         <div class="divda_d1">
             <img src="../assets/img1.jpg" class="img1">
         </div>
         <div class="divda_d2">
              <p class="divda_d2_p1">吾  记</p>
         </div>
          <div class="divda_d3">
                <input class="divda_d3_input1" type="text" placeholder="输入账号邮箱" required>
                <input class="divda_d3_input2" type="password" placeholder="请输入密码"required>
                <input class="divda_d3_input3" type="submit" name="denglu" value="                     登录">
          </div>
          <div class="divda_d4">
                <p class="divda_d4_p1"><a class="divda_d4_p_a1" href="../components/asdasd.vue">注册账号</a></p>
                <p class="divda_d4_p2"><a class="divda_d4_p_a2" href="#">忘记密码</a></p>
          </div>

    </div>
</template>


<style>
  body{
      margin: 0px;
      background-color: #64bc80;
  }
  .divda{
      background-color: #64bc80;
      display: flex;
      margin: 0px;
      flex-direction: column;
  }
  .divda_d1{
      margin: 250px auto 10px;
  }
  .img1{
      width:176px;
      height:202px;
  }
  .divda_d2{
      display: flex;
      margin: 0px auto 100px;
  }
  .divda_d2_p1{
      display: flex;
      color:white;
      font-size:30px;
      margin:0px;
  }
  .divda_d3{
      display: flex;
      flex-direction: column;
      margin: -80px auto 10px;
  }
  .divda_d3_input1 {
       display: flex;
       color: white;
       font-size: 15px;
       margin-bottom: 20px;
       text-indent: 30px;
       width: 300px;
       background-color: #64bc80;
       height: 40px;
       border-radius: 25px;
       border: 1px solid #fbfdfc;
  }
  .divda_d3_input2{
      display: flex;
      color: white;
      font-size: 15px;
      text-indent: 30px;
      width: 300px;
      background-color: #64bc80;
      height: 40px;
      border-radius: 25px;
      border: 1px solid #fbfdfc;
  }
  .divda_d3_input3{
        display: flex;
        color: #54a363;
        font-size: 15px;

        margin-top: 20px;
        width: 300px;
        background-color: #fefefe;
        height: 40px;
        border-radius: 25px;
        border: none;
  }
  .divda_d4{
        display:flex;
        flex-direction: row;
        margin: 0px auto 200px;
        justify-content: space-between;
        width: 300px;
        height: 40px;
  }
  .divda_d4_p1{
        color:white;

  }
  .divda_d4_p2{
        color:white;

  }
  .divda_d4_p_a1{
      text-decoration: none;
      color:white;
  }
  .divda_d4_p_a2{
      text-decoration: none;
      color:white;
  }

</style>
