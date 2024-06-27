pipeline {
  agent any

  stages {
    stage('build'){
      steps{
        bat "npm install"
      }
    }

    stage('dev'){
      steps{
        // bat "npm run dev -- --host" // serve at 3030
      }
    }
  }
}
