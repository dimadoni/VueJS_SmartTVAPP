<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ sayhello() }}</h1>
    <h2 ref="heading">TEXT</h2>
    <h2>Essential Links</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="loading">Login</button>
                <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            </div>
        </form>
    <div v-for='(post,index) in values'>
        <span>{{index+1}}</span>
        <h3>{{ post.name }}</h3>
        <img v-bind:src="PictureURL"1/> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: [],
      username: '',
      password: '',
      counter: 0,
      submitted: false,
      loading: false,
      PictureUrl: '',
      values: []
    }
  },
  methods: {
    sayhello: function () {
      return "i'm' ready for vuejs"
    },
    handleSubmit: function (e) {
            const { username, password } = this
            console.log(username)
            console.log(password)
            this.$refs.heading.style.color = "red"
            // stop here if form is invalid
            if (!(username && password)) {
                return;
            }
            this.loading = true;
            this.$http.get('https://'+username+':'+password+'@mw.tvmax.by/api/get_playlist/', {
"Content-type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Expose-Headers":"Authorization, Cache-Control, Content-Length, Date, Expires, Server, Transfer-Encoding, Accept-Language, x-goog-meta-foo1"
       }).then(
            function (response) { // Success.
                console.log(response.data);
                this.values = response.data.channels;
                for (var i = 0; i <= response.data.channels; i++) {
                  this.PictureUrl = response.data.channels[i].img
                }
                this.loading = false;
                },
            function (response) { // Error.
                    console.log('An error occurred.');
                }
            )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
