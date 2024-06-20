pipeline {
  agent {}

  stages {
    stage('build'){
      steps{
        bat "npm install"
      }
    }

    stage('dev'){
      steps{
        bat "npm run dev" // serve at 3030
      }
    }
  }
}
