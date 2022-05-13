pipeline {
  agent any
  stages {
    stage("verify tooling") {
      steps{
        sh '''
        docker version
        docker info
        docker-compose version
        curl --version
        '''
      }
    }
    stage("Prune Docker data") {
      steps {
        sh 'docker system prune -a --volumes -f' // Start off with clean base each run
      }
    }
    stage("Start Containers") {
      steps{
        sh 'docker-compose up -d --no-color --wait' // -d detach no color because no GUI
        sh 'docker-compose ps' // Check whats running
      }
    }
    stage("Run Tests against containers") {
      steps{
        sh 'curl http://localhost:5000' // some api endpoint for .net
        sh 'curl http://localhost:3000' // get react app page
      }
    }
  }
    post { // Post stage actions
    always {
      sh 'docker-compose down --remove-orphans -v' // removes any leftover containers 
      sh 'docker-compose ps'
    }
  }
}