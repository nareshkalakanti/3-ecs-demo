# ECS Demo

## Prerequisites

- **Install AWS CLI**: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

## Overview

**ECR - Amazon Elastic Container Registry**: A Docker container registry similar to DockerHub.

In ECS, a task definition specifies how Docker containers should be configured and run. Tasks are instances of these definitions, representing actual running containers. ECS services then manage these tasks, ensuring the specified number of instances are running and handling scaling and availability. So, task definitions define the container setup, tasks are the running instances based on those definitions, and services manage the lifecycle and scaling of those tasks.

### Key Components:

1. **ECS Service**:
   - Manages groups of tasks, ensuring a specified number run.
   - Handles scaling and availability.

2. **Task Definition**:
   - Configuration for running a Docker container.
   - Defines Docker image, resources, networking, etc.

3. **Task**:
   - An instance of a task definition running in ECS.
   - Represents a containerized application or workload.

---

# ECS Demo - Deployment Guide

## Push your image to Amazon Elastic Container Registry

- Create an AWS ECR repository to store your image.
- Tag the image
- Run the aws ecr get-login-password command
- Push the image to Amazon ECR

## Create the cluster

## Create a task definition

- Specify image URL from ECR repository
- Add port mapping

## Go back to the cluster and Create a service using the task definition

- Mention task and no of tasks
- Add Application Load Balancer
- Add auto scaling and policy for that
- Notice the no of tasks in your created service
- Go to the LB you created
- Check security group of LB and allow inbound rule for HTTP
- Checkout the public URL of LB

## Rolling update

- Make change in your code and push it to ECR
- Go back to service and update it - force new deployment
- Check the tasks and their health statuses (keep refreshing)
- Check the same public URL of LB

---

## Continuous Integration (CI)

1. **Frequent Code Integration**: Developers frequently merge their code changes into a shared repository, usually multiple times a day.

2. **Automated Builds**: Automated processes are triggered whenever code changes are submitted, such as compiling code, running tests, and generating artifacts.

3. **Early Detection of Issues**: Automated tests help identify bugs and integration issues early in the development cycle, preventing them from snowballing into larger problems.

4. **Integration Feedback**: Developers receive immediate feedback on the quality of their code changes, allowing them to address issues quickly.

## Continuous Delivery (CD)

1. **Automated Deployment Pipeline**: A series of automated steps that take code from the repository to production, including testing, staging, and deployment.

2. **Consistent Deployment**: Ensures that every code change that passes through the pipeline can be deployed to production environments consistently and reliably.

3. **Fast Feedback Loop**: Enables rapid feedback on the deployability of code changes, reducing the time between writing code and delivering it to users.

4. **Incremental Updates**: Allows for incremental updates to be deployed to production frequently, rather than large, infrequent releases, reducing risk and enabling faster innovation.

**Reference**: [AWS CI/CD Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/cicd_for_5g_networks_on_aws/cicd-on-aws.html)

---

## CI/CD using GitHub

- Create Git Repo and push code
- Go to Actions > Deploy to Amazon ECS
- Change env values from AWS
- For task definition => Download JSON from AWS and upload file on GitHub
- In GitHub, go to settings > secrets and variables > actions
- Add repo secrets from AWS => Profile > Security credentials > Access Keys
- Make change in your GitHub code (or push changes)
- Go to Actions and see Deployment
