<template>
    <div>
        <v-btn v-if="show"
            fab
            bottom
            right
            color="pink"
            dark
            fixed
            @click="share"
        >
            <v-icon>share</v-icon>
        </v-btn>
        <v-speed-dial
                fixed
                :bottom="true"
                :right="true"
                direction="top"
                v-else
        >
            <v-btn
                    slot="activator"
                    color="blue darken-2"
                    dark
                    fab
                    hover
            >
                <v-icon>account_circle</v-icon>
                <v-icon>close</v-icon>
            </v-btn>
            <v-btn
                    fab
                    dark
                    small
                    color="green"
            >
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
                    fab
                    dark
                    small
                    color="indigo"
            >
                <v-icon>add</v-icon>
            </v-btn>
            <v-btn
                    fab
                    dark
                    small
                    color="red"
            >
                <v-icon>delete</v-icon>
            </v-btn>
        </v-speed-dial>
    </div>
</template>

<style>

</style>

<script>
  export default {
    name: 'Share',
    data () {
      return {
        data: 'example',
        show: false
      }
    },
    methods: {
      share () {
        navigator.share({
          title: 'Eric Multimedia!',
          text: 'Aplicació multimedia creada per Eric Garcia.',
          url: window.location.href
        }).then(() => {
          console.log('Gràcies per compartir!')
        }).catch(err => {
          console.log(`No s'ha pogut compartir degut a `, err.message)
        })
      }
    },
    mounted () {
      if (navigator.share) this.show = true
    }
  }
</script>