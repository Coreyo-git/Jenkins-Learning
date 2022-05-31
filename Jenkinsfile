pipeline {
  agent any
  stages {
    stage("verify tooling") {
      steps{
        sh 'docker-compose down --remove-orphans -v' // removes any leftover containers 
        sh 'docker-compose ps'
        sh '''
        docker version
        docker info
        docker-compose version
        curl --version
        '''
      }
    }
    stage("Build Docker Containers") {
      steps {
        sh 'docker-compose build'
      }
    }
    stage("Start Containers") {
      steps{
        sh 'docker-compose up -d --no-color --remove-orphans' // -d detach no color because no GUI
        sh 'docker-compose ps' // Check whats running
      }
    }
    stage("Run Tests against containers") {
      steps{
        sh 'curl http://localhost:5000/WeatherForecast' // some api endpoint for .net
        sh 'curl http://localhost:80/' // get react app page
      }
    }
  }
    post { // Post stage actions
    failure {
      sh 'docker-compose down --remove-orphans -v' // removes any leftover containers 
      sh 'docker-compose ps'
    }
  }
}