provider "aws" {
  region  = var.region
  profile = var.profile
}

data "aws_iam_policy_document" "website_policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    resources = [
      "arn:aws:s3:::${var.name}-${var.stage}/*"
    ]
  }
}

resource "aws_s3_bucket" "components" {
  bucket = "${var.name}-${var.stage}"
  acl    = "public-read"
  policy = data.aws_iam_policy_document.website_policy.json

  website {
    index_document = "index.html"
    error_document = "error.html"
  }

  tags = {
    Name    = "${var.name}-${var.stage}"
    Owner   = var.owner
    Project = var.project
  }
}

resource "aws_cloudfront_distribution" "components" {
  depends_on = [
    aws_s3_bucket.components
  ]

  origin {
    domain_name = "${var.name}-${var.stage}.s3.amazonaws.com"
    origin_id   = "S3-${var.domain_name}"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  #   aliases = [var.domain_name]

  viewer_certificate {
    acm_certificate_arn      = var.certificate_arn
    minimum_protocol_version = "TLSv1.2_2019"
    ssl_support_method       = "sni-only"
  }

  price_class = "PriceClass_100"

  default_cache_behavior {
    allowed_methods = [
      "GET",
      "HEAD",
    ]

    cached_methods = [
      "GET",
      "HEAD",
    ]

    target_origin_id = "S3-${var.domain_name}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  custom_error_response {
    error_code            = 403
    response_code         = 200
    error_caching_min_ttl = 0
    response_page_path    = "/error.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Name    = "${var.name}-${var.stage}"
    Owner   = var.owner
    Project = var.project
  }

}
