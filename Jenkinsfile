pipeline{
    agent any

    parameters{
        string
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo "Building the application"
        }
        stage(('Testing')){
            steps{
                bat 'npm install'
                bat 'npm run test:AddToCart'
            }
        }
        stage('Deploying'){
            echo "Deploying the application"
        }
    }

    post{
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, icon: '', keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}