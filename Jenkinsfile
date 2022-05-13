pipeline {
    agents any
    stages {
        stage("build"){
            when {
                expression { // Only deploy when master branch is pushed too
                    BRANCH_NAME == 'master'
                }
            }
            steps{
                echo 'Building React App..'
                cd react-app
                npm install
                npm run build

                echo 'Building Back end'
                cd ../shopping-api
                dotnet build
            }
        }
        stage("test"){
            when {
                expression {
                    BRANCH_NAME == 'master'
                }
            }
            steps{
                echo 'Testing'
            }
        }
        stage("deploy"){
            when {
                expression {
                    BRANCH_NAME == 'master'
                }
            }
            steps{
                echo "deploying"
            }
        }
    }
    post { // Post stage actions
        always {
            //
        }
        success {
            //
        }
        failure {
            //
        }
    }
}