# aws-eks-node-app

1. Create EKS cluster

eksctl create cluster --name app  --region us-west-2 --nodes 2 --node-type t3.small --node-volume-size 8

https://github.com/awslabs/amazon-eks-ami/blob/master/files/eni-max-pods.txt

t3.nano 4  --dont work (https://stackoverflow.com/questions/57970896/pod-limit-on-node-aws-ekse)
t3.micro 4  --dont work
t3.small 11
t3.medium 17
t3.large 35

Before learning kubernetes, you have to know docker and docker-compose
Docker-compose is awesome to run locally and it may be run on the server as well
Kubernetes is tool that does the docker-compose job, plus it scales (without having to touch servers) and manage failures (health) and zero downtime deployment

kubectl apply -f app-producer/deployment.yaml 