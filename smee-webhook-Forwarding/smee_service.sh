#!/bin/bash
# uses smee-client npm package, a webhook payload delivery service
# Allows for webhook payloads without having to forward ports
# Ran locally to forward github webhook payloads to Jenkins Client

# Configure a github weekhook that points to the hosted endpoint/url
smee --url https://smee.io/<ENDPOINT> --path /github-webhook/ --port <PORT>
