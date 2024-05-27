pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'cep'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Clamant96/cep'
            }
        }
        
        stage('Docker Build') { 
            agent {
                docker {
                    image 'Clamant96/cep:latest'
                    reuseNode true
                }
            }
            steps {
                echo "Building app using Docker Image" 
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }
        
        stage('Run') {
            steps {
                script {
                    // Parar e remover contêiner antigo, se existir
                    def container = docker.ps().find { it.names.contains('cep') }
                    if (container) {
                        docker.stop(container.id)
                        docker.rm(container.id)
                    }
                    
                    // Executar novo contêiner
                    docker.run("${DOCKER_IMAGE}:${DOCKER_TAG}", '-d -p 80:80 --name cep')
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado'
        }
        success {
            echo 'Aplicação subida com sucesso'
        }
        failure {
            echo 'Falha na pipeline'
        }
    }
}
