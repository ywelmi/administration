pipeline {
  agent any

// trigger remotely by: curl -I http://tq24:Vanmeo%40123%21@192.168.121.135:8090/job/tq24-admin-page/build?token=tq24_admin
  stages {
    stage('build'){
      steps{
        bat "npm install"
      }
    }

    stage('dev'){
      steps{
        // bat "npm run dev -- --host" // serve at 3030
        bat "echo 'tq24 welcom'"
      }
    }
  }
}
