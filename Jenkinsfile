pipeline {
  agent any

  stages {
    stage('build'){
      steps{
        bat "npm install"
        bat "npm install -g pm2"
      }
    }

    stage('dev'){
      steps{
        // bat "npm run dev" // serve at 3030
        bat "pm2 start npm --name \"tq24-admin\" -- run dev" // serve at 3030
      }
    }
  }
}
