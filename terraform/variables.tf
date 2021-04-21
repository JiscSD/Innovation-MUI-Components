variable "name" {
  description = "A descriptive name for the resource"
  type        = string
  default     = "mui-components-website"
}

variable "stage" {
  description = "Stage name. dev or live"
  type        = string
  default     = "live"
}

variable "owner" {
  description = "The owner/creator of the resource"
  type        = string
  default     = "Kiran Joshi"
}

variable "project" {
  description = "The project the resource belongs to"
  type        = string
  default     = "mui-components"
}

variable "region" {
  description = "AWS region"
  type        = string
  default     = "eu-west-2"
}

variable "profile" {
  description = "Credentials profile"
  type        = string
  default     = "InnovationDev"
}

variable "domain_name" {
  description = "Website domain name"
  type        = string
  default     = "components.ai.alpha.jisc.ac.uk"
}

variable "certificate_arn" {
  description = "ARN of certificate in ACM"
  type        = string
  default     = "arn:aws:acm:us-east-1:461836669987:certificate/349baeae-55f1-4a14-bcae-337ec5827e8a"
}
