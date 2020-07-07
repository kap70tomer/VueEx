
<template>
  <Layout>
   <h1>Profiles Dashboarb</h1>
    <viewTable :tdata="profiles" :config="config"/>
   <br>
   {{profiles}}
  </Layout>
</template>

<script>
import Layout from '@layouts/main.vue';
import viewTable from '@views/playgroundView.vue';
import { mapGetters, mapActions } from 'vuex';

export default {

  page: {
    title: 'Playground',
  },

  components:
  {
    Layout,
    viewTable
  },

  data:() => ({
    profiles:[],

    config:[
      {
        key: 'id',
        title:'ID',
        type: 'number'
      },
      {
        key: 'avatar',
        title: 'Avatar',
        type: 'image'
      },
      {
        key: 'first_name',
        title: 'First Name',
        type: 'text'
      },
      {
        key: 'last_name',
        title: 'Last Name',
        type: 'text'
      },
      {
        key: 'email',
        title: 'Email',
        type: 'text'
      }],
    }),

    computed: mapGetters('playground',['allData']),

  created(){
    this.fetchTableData().then((res)=> {
      this.profiles = res.data
      console.log(JSON.stringify(res.data) +" table data");
    })
  },

    methods: mapActions('playground',['fetchTableData']),


}
</script>
