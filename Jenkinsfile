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
    stage("Prune Docker data") {
      steps {
        //sh 'docker system prune -a --volumes -f' // Start off with clean base each run
        //sh 'docker images -a | grep "bitbyteyum" | xargs docker rmi' // Removes the images for a fresh build
        sh '''
        docker rmi $(docker images -q bitbyteyum/shopapi)
        docker rmi $(docker images -q bitbyteyum/react-app)
        ''' // Removes the two images built front and back end
      }
    }
    stage("Start Containers") {
      steps{
        sh 'docker-compose up -d --no-color' // -d detach no color because no GUI
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