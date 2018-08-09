pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'export PATH=/usr/local/bin:$PATH'
        sh 'npm install'
      }
    }
  }
}