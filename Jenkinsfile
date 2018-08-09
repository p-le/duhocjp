pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''/usr/bin/npm install
npx gatsby build
ln -sf "$(pwd)/public" /var/www/duhocjp'''
      }
    }
  }
}