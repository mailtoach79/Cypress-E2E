pipeline{
    agent any

    parameters{
        
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
        }
        stage(('Testing')){
            steps{
                bat 'npm install'
                bat 'npm run test:AddToCart'
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploying the application"
            }
        }
    }

    post{
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, icon: '', keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}