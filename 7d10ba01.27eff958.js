(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{244:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(436)),c=["components"],s={sidebar_label:"AWS",Title:"AWS S3 Integration"},i={unversionedId:"platform_concepts/studio/knowledge-management/AWS",id:"platform_concepts/studio/knowledge-management/AWS",isDocsHomePage:!1,title:"AWS",description:"yellow.ai\u2019s document cognition feature now supports integration with AWS S3. The document cognition system is hence capable of fetching entire documents from a AWS S3 site (along with all sub-sites) which includes documents uploaded to document libraries, documents created online and list attachments, convert them into Q/A format and sync at a regular interval. All documents with extension \u2018.docx\u2019 and \u2018.pdf\u2019 are considered.",source:"@site/docs/platform_concepts/studio/knowledge-management/AWS.md",slug:"/platform_concepts/studio/knowledge-management/AWS",permalink:"/docs/platform_concepts/studio/knowledge-management/AWS",version:"current",sidebar_label:"AWS"},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"How to validate AWS credentials",id:"how-to-validate-aws-credentials",children:[]},{value:"Amazon S3 REST API Introduction",id:"amazon-s3-rest-api-introduction",children:[]},{value:"Configuring credentials",id:"configuring-credentials",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(o.a)(e,c);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"yellow.ai\u2019s document cognition feature now supports integration with AWS S3. The document cognition system is hence capable of fetching entire documents from a AWS S3 site (along with all sub-sites) which includes documents uploaded to document libraries, documents created online and list attachments, convert them into Q/A format and sync at a regular interval. All documents with extension \u2018.docx\u2019 and \u2018.pdf\u2019 are considered."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Give User Access To Only One S3 Bucket Only ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on the s3 bucket and copy its ARN")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("a",{parentName:"p",href:"https://awspolicygen.s3.amazonaws.com/policygen.html"}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select Policy Type select : IAM policy")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add Statement(s): past the ARN in the Amazon resource Name twice first the actual value \u2018,\u2019 and then ARN with "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"}," Eg : arn:aws:s3:::testbucketpritam<br> arn:aws:s3:::testbucketpritam/\n")))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/hRgNSyTkHZks1622449643916.png",alt:null})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Click on add statements ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rZxPtEtAUnTT1622450860215.png",alt:null})),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to IAM dashboard select policy, go to create policy, paste the JSON generated from the previous step.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to user in IAN dashboard and create a user."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/XYGcfKP6fjlm1622451232053.png",alt:null})),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},"Go to attach existing policies")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/qe7VpTK62CNc1622451406561.png",alt:null})," "),Object(r.b)("ol",{start:10},Object(r.b)("li",{parentName:"ol"},"You can add the s3 bucket policy you just created to the user.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/WVrnN3WgkNf31622451447613.png",alt:null})),Object(r.b)("p",null,"Congratulations u have created a new user with access to only a single bucket. To the aws console link in the above screenshot and login with this new user as a IAN user you will have access to the s3 bucket."),Object(r.b)("h2",{id:"how-to-validate-aws-credentials"},"How to validate AWS credentials"),Object(r.b)("p",null," The only way to verify AWS credentials is to actually use them to sign a request and see if it works. You are correct that simply creating the connection object tells you nothing because it doesn\u2019t perform a request."),Object(r.b)("h2",{id:"amazon-s3-rest-api-introduction"},"Amazon S3 REST API Introduction"),Object(r.b)("p",null,"  Making REST API calls directly from your code can be cumbersome. It requires you to write the necessary code to calculate a valid signature to authenticate your requests. We recommend the following alternatives instead:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Use the AWS SDKs to send your requests. With this option, you don\u2019t need to write code to calculate a signature for request authentication because the SDK clients authenticate your requests by using access keys that you provide. Unless you have a good reason not to, you should always use the AWS SDKs.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Use the AWS CLI to make Amazon S3 API calls.")),Object(r.b)("p",null,"  AWS SDK is available in a lot of different languages like JS, PYTHON, JAVA, DOTNET, PHP etc. "),Object(r.b)("h4",{id:"aws-sdk-for-javascript-alternative-approach"},"AWS SDK for JavaScript (Alternative approach):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"For Python : pip install boto3\n")),Object(r.b)("h2",{id:"configuring-credentials"},"Configuring credentials"),Object(r.b)("p",null," Boto3 will look in several locations when searching for credentials. The mechanism in which Boto3 looks for credentials is to search through a list of possible locations and stop as soon as it finds credentials. The order in which Boto3 searches for credentials is:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Passing credentials as parameters in the ",Object(r.b)("inlineCode",{parentName:"p"},"boto.client()"),"method.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Passing credentials as parameters when creating a ",Object(r.b)("inlineCode",{parentName:"p"},"Session")," object")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Environment variables.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Shared credential file (~/.aws/credentials).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"AWS config file (~/.aws/config).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Assume Role provider.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Boto2 config file (/etc/boto.cfg and ~/.boto).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Instance metadata service on an Amazon EC2 instance that has an IAM role configured."),Object(r.b)("p",{parentName:"li"},"Passing credentials as parameters in the boto.client"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"import boto3\nclient = boto3.client('s3',\n   aws_access_key_id=ACCESS_KEY,\n   aws_secret_access_key=SECRET_KEY,\n   aws_session_token=SESSION_TOKEN \n   )\n")),Object(r.b)("p",{parentName:"li"},"Shared credential file ",Object(r.b)("inlineCode",{parentName:"p"},"(~/.aws/credentials)")),Object(r.b)("p",{parentName:"li"}," You need to create a credential file at ",Object(r.b)("inlineCode",{parentName:"p"},"~/.aws/credentials"),". And add credentials - "),Object(r.b)("p",{parentName:"li"}," ","[default]"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"}," aws_access_key_id = YOUR_ACCESS_KEY\n aws_secret_access_key = YOUR_SECRET_KEY\n")),Object(r.b)("p",{parentName:"li"},"  The shared credentials file also supports the concept of profiles. Profiles represent logical groups of configuration. The shared credential file can have multiple profiles:"),Object(r.b)("p",{parentName:"li"},"  ","[default]"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"aws_access_key_id=foo\naws_secret_access_key=bar\n")),Object(r.b)("p",{parentName:"li"},"  ","[dev]"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"aws_access_key_id=foo2\naws_secret_access_key=bar2\n")),Object(r.b)("p",{parentName:"li"},"  ","[prod]"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"aws_access_key_id=foo3\naws_secret_access_key=bar3\n")),Object(r.b)("p",{parentName:"li"},"  You can then specify a profile name via the AWS_PROFILE environment variable or the profile_name argument when creating a Session. For example, we can create a Session using the \u201cdev\u201d profile and any clients created from this session will use the \u201cdev\u201d credentials:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"import boto3\nsession = boto3.Session(profile_name=\u2018dev\u2019)\ndev_s3_client = session.client(\u2018s3\u2019)\n")),Object(r.b)("p",{parentName:"li"},"  Boto3 makes it easy to integrate your Python application, library, or script with AWS services including Amazon S3, Amazon EC2, Amazon DynamoDB, and more."),Object(r.b)("p",{parentName:"li"},"  Client and Resource are two different abstractions within the boto3 SDK for making AWS service requests. You would typically choose to use either the Client abstraction or the Resource abstraction to make AWS service requests.\n"))),Object(r.b)("h4",{id:"client"},"Client:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"this is the original boto3 API abstraction"),Object(r.b)("li",{parentName:"ul"},"provides low-level AWS service access"),Object(r.b)("li",{parentName:"ul"},"all AWS service operations are supported by clients"),Object(r.b)("li",{parentName:"ul"},"exposes botocore client to the developer"),Object(r.b)("li",{parentName:"ul"},"typically maps 1:1 with the AWS service API"),Object(r.b)("li",{parentName:"ul"},"snake-cased method names (e.g. ",Object(r.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html"},"ListBuckets")," API => ",Object(r.b)("a",{parentName:"li",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Client.list_buckets"},"list_buckets")," method)"),Object(r.b)("li",{parentName:"ul"},"generated from AWS service description")),Object(r.b)("h4",{id:"resource"},"Resource:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"this is the newer boto3 API abstraction"),Object(r.b)("li",{parentName:"ul"},"provides high-level, object-oriented API"),Object(r.b)("li",{parentName:"ul"},"does not provide 100% API coverage of AWS services"),Object(r.b)("li",{parentName:"ul"},"uses identifiers and attributes"),Object(r.b)("li",{parentName:"ul"},"has actions (operations on resources)"),Object(r.b)("li",{parentName:"ul"},"exposes subresources and collections of AWS resources"),Object(r.b)("li",{parentName:"ul"},"generated from resource description")),Object(r.b)("h5",{id:"code-to-list-all-buckets"},"Code to list all buckets:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"only works if the user has the proper access eg: ListAllMyBuckets access."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre",className:"language-js"},"\u201cResource\u201d: \u201carn:aws:s3:::*\u201d\n"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import boto3<br>\ns3 = boto3.resource(\u2018s3\u2019)\nfor bucket in s3.buckets.all():\nprint(bucket.name)\n")),Object(r.b)("h5",{id:"code-to-list-all-files-in-a-bucket"},"Code to list all files in a bucket:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"   import boto3\n   s3 = boto3.resource(\u2018s3\u2019)\n   objects = s3.Bucket(name='<YOUR AWS S3 BUCKET NAME>\u2019).objects.all()\n   for o in objects:\n   print(o)\n    \n    s3.ObjectSummary(bucket_name='<YOUR AWS S3 BUCKET NAME>\u2019, key=\u2018Algorithms to Live By_ The Computer Science of Human Decisions ( PDFDrive ).pdf\u2019),\n    s3.ObjectSummary(bucket_name='<YOUR AWS S3 BUCKET NAME>\u2019, key=\u2018All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019) _ by Samer Buna _ EdgeCoders _ Medium.pdf\u2019)\n")),Object(r.b)("h5",{id:"code-to-upload-a-file"},"Code to upload a file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"    import boto3\n    s3_client = boto3.client(\u2018s3\u2019)\n    s3_client.upload_file(\u2018hello.txt\u2019, '<YOUR AWS S3 BUCKET NAME>\u2019, \u2018hello.txt\u2019)\n    upload_file(<name of the file in local>, <bucket name>, <name of the file in s3>)\n")),Object(r.b)("h5",{id:"code-to-download-a-file-from-s3"},"Code to Download a file from s3"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"   import boto3\n   s3_client = boto3.client(\u2018s3\u2019)\n   s3_client.download_file('<YOUR AWS S3 BUCKET NAME>\u2019, \u2018hello.txt\u2019, \u2018hello2.txt\u2019)\n   download_file(<Bucket Name>, <FileName in S3>,<file name that u want in local)\n")),Object(r.b)("h6",{id:"code-to-edit-a-file-in-s3"},"Code to Edit a file in s3"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"    import boto3\n    s3_client = boto3.client(\u2018s3\u2019)\n    open(\u2018hello.txt\u2019,\u2018a+\u2019).write(\u2018Hello, world!\u2019)\n    `13`\n    s3_client.upload_file(\u2018hello.txt\u2019, '<YOUR AWS S3 BUCKET NAME>\u2019, \u2018hello.txt\u2019)\n")),Object(r.b)("h5",{id:"code-to-get-all-file-metadata"},"Code to get all file metadata"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import boto3\ns3client = boto3.client(\u2018s3\u2019)\npaginator = s3client.get_paginator(\u2018list_objects_v2\u2019)\npage_iterator = paginator.paginate(Bucket='<YOUR AWS S3 BUCKET NAME>\u2019)\nfor bucket in page_iterator:\n for file in bucket[\u2018Contents\u2019]:\n print(file[\u2018Key\u2019])\n try:\n metadata = s3client.head_object(Bucket='<YOUR AWS S3 BUCKET NAME>\u2019, Key=file[\u2018Key\u2019])print(metadata)\n except:\n print(\u201cFailed {}\u201d.format(file[\u2018Key\u2019]))\n")),Object(r.b)("p",null,"Algorithms to Live By_ The Computer Science of Human Decisions ( PDFDrive ).pdf"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\u2018ResponseMetadata\u2019: {\u2018RequestId\u2019: \u20187C74267CF4193023\u2019, \u2018HostId\u2019: \u2018IasZHHYmUPug6/qe4W53fJSSxcrnPerVCt5xOB/WsPDr2qgQcs0xqb7zJxPYxtxEogvQ552LrA4=\u2019, \u2018HTTPStatusCode\u2019: 200, \u2018HTTPHeaders\u2019: {\u2018x-amz-id-2\u2019: \u2018IasZHHYmUPug6/qe4W53fJSSxcrnPerVCt5xOB/WsPDr2qgQcs0xqb7zJxPYxtxEogvQ552LrA4=\u2019, \u2018x-amz-request-id\u2019: \u20187C74267CF4193023\u2019, \u2018date\u2019: \u2018Tue, 02 Mar 2021 08:26:57 GMT\u2019, \u2018last-modified\u2019: \u2018Tue, 02 Mar 2021 06:13:44 GMT\u2019, \u2018etag\u2019: \u2018\u201cb926ad30c85d7bb4bd5da12ee2651e37\u201d\u2019, \u2018accept-ranges\u2019: \u2018bytes\u2019, \u2018content-type\u2019: \u2018application/pdf\u2019, \u2018content-length\u2019: \u20182732141\u2019, \u2018server\u2019: \u2018AmazonS3\u2019}, \u2018RetryAttempts\u2019: 0}, \u2018AcceptRanges\u2019: \u2018bytes\u2019, \u2018LastModified\u2019: datetime.datetime(2021, 3, 2, 6, 13, 44, tzinfo=tzutc()), \u2018ContentLength\u2019: 2732141, \u2018ETag\u2019: \u2018\u201cb926ad30c85d7bb4bd5da12ee2651e37\u201d\u2019, \u2018ContentType\u2019: \u2018application/pdf\u2019, \u2018Metadata\u2019: {}}\n")),Object(r.b)("p",null,"All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019) ",Object(r.b)("em",{parentName:"p"}," by Samer Buna ")," EdgeCoders _ Medium.pdf"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\u2018ResponseMetadata\u2019: {\u2018RequestId\u2019: \u20187FBA9FCC1B69CC4B\u2019, \u2018HostId\u2019: \u2018hCZxPciVILDGXJvfjtac9irPOkFDEjwr9BKG8Dq69DIdgv7YmFVuoD3p0Z7srI/3YeLZkkN4F9U=\u2019, \u2018HTTPStatusCode\u2019: 200, \u2018HTTPHeaders\u2019: {\u2018x-amz-id-2\u2019: \u2018hCZxPciVILDGXJvfjtac9irPOkFDEjwr9BKG8Dq69DIdgv7YmFVuoD3p0Z7srI/3YeLZkkN4F9U=\u2019, \u2018x-amz-request-id\u2019: \u20187FBA9FCC1B69CC4B\u2019, \u2018date\u2019: \u2018Tue, 02 Mar 2021 08:26:57 GMT\u2019, \u2018last-modified\u2019: \u2018Tue, 02 Mar 2021 06:13:42 GMT\u2019, \u2018etag\u2019: \u2018\u201c4f6f8b7d2de81151f34170777c301ba6\u201d\u2019, \u2018accept-ranges\u2019: \u2018bytes\u2019, \u2018content-type\u2019: \u2018application/pdf\u2019, \u2018content-length\u2019: \u20183668501\u2019, \u2018server\u2019: \u2018AmazonS3\u2019}, \u2018RetryAttempts\u2019: 0}, \u2018AcceptRanges\u2019: \u2018bytes\u2019, \u2018LastModified\u2019: datetime.datetime(2021, 3, 2, 6, 13, 42, tzinfo=tzutc()), \u2018ContentLength\u2019: 3668501, \u2018ETag\u2019: \u2018\u201c4f6f8b7d2de81151f34170777c301ba6\u201d\u2019, \u2018ContentType\u2019: \u2018application/pdf\u2019, \u2018Metadata\u2019: {}}\n")),Object(r.b)("p",null,"hello.txt"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\u2018ResponseMetadata\u2019: {\u2018RequestId\u2019: \u20182893E89438DCAFC9\u2019, \u2018HostId\u2019: \u20181bQ8mGMeZh+nQSYsirplyuk67yHabWl7q1Cv/GKsJFk+RlfAmG6cgPCvPdQBucXfHqlRjnz1A3E=\u2019, \u2018HTTPStatusCode\u2019: 200, \u2018HTTPHeaders\u2019: {\u2018x-amz-id-2\u2019: \u20181bQ8mGMeZh+nQSYsirplyuk67yHabWl7q1Cv/GKsJFk+RlfAmG6cgPCvPdQBucXfHqlRjnz1A3E=\u2019, \u2018x-amz-request-id\u2019: \u20182893E89438DCAFC9\u2019, \u2018date\u2019: \u2018Tue, 02 Mar 2021 08:26:57 GMT\u2019, \u2018last-modified\u2019: \u2018Tue, 02 Mar 2021 08:23:43 GMT\u2019, \u2018etag\u2019: \u2018\u201c738de4578efc7f327bb3897d162fb758\u201d\u2019, \u2018accept-ranges\u2019: \u2018bytes\u2019, \u2018content-type\u2019: \u2018binary/octet-stream\u2019, \u2018content-length\u2019: \u201827\u2019, \u2018server\u2019: \u2018AmazonS3\u2019}, \u2018RetryAttempts\u2019: 0}, \u2018AcceptRanges\u2019: \u2018bytes\u2019, \u2018LastModified\u2019: datetime.datetime(2021, 3, 2, 8, 23, 43, tzinfo=tzutc()), \u2018ContentLength\u2019: 27, \u2018ETag\u2019: \u2018\u201c738de4578efc7f327bb3897d162fb758\u201d\u2019, \u2018ContentType\u2019: \u2018binary/octet-stream\u2019, \u2018Metadata\u2019: {}}\n")),Object(r.b)("p",null,"hello1.txt"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\u2018ResponseMetadata\u2019: {\u2018RequestId\u2019: \u20188445E9AC02B726B7\u2019, \u2018HostId\u2019: \u2018gsMC+IZY8hzl77Z8Gmuad1kNlMmBCIfNppu85lGK0AvzgZ8Uxvqb+sDXmH0mITLPeFNiq9pi+aw=\u2019, \u2018HTTPStatusCode\u2019: 200, \u2018HTTPHeaders\u2019: {\u2018x-amz-id-2\u2019: \u2018gsMC+IZY8hzl77Z8Gmuad1kNlMmBCIfNppu85lGK0AvzgZ8Uxvqb+sDXmH0mITLPeFNiq9pi+aw=\u2019, \u2018x-amz-request-id\u2019: \u20188445E9AC02B726B7\u2019, \u2018date\u2019: \u2018Tue, 02 Mar 2021 08:26:58 GMT\u2019, \u2018last-modified\u2019: \u2018Tue, 02 Mar 2021 08:15:21 GMT\u2019, \u2018etag\u2019: \u2018\u201cd41d8cd98f00b204e9800998ecf8427e\u201d\u2019, \u2018accept-ranges\u2019: \u2018bytes\u2019, \u2018content-type\u2019: \u2018binary/octet-stream\u2019, \u2018content-length\u2019: \u20180\u2019, \u2018server\u2019: \u2018AmazonS3\u2019}, \u2018RetryAttempts\u2019: 0}, \u2018AcceptRanges\u2019: \u2018bytes\u2019, \u2018LastModified\u2019: datetime.datetime(2021, 3, 2, 8, 15, 21, tzinfo=tzutc()), \u2018ContentLength\u2019: 0, \u2018ETag\u2019: \u2018\u201cd41d8cd98f00b204e9800998ecf8427e\u201d\u2019, \u2018ContentType\u2019: \u2018binary/octet-stream\u2019, \u2018Metadata\u2019: {}}\n")),Object(r.b)("h5",{id:"code-to-download-previous-versions"},"Code to download previous versions"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'import boto3\nfrom boto3.s3.transfer \nimport S3Transfer<br> ACCESS_KEY = \u2018<YOUR AWS ACCOUNT ACCESS KEY>\u2019\nSECRET_KEY = \u2018<YOUR AWS ACCOUNT SECRET ACCESS KEY>\u2019\nBUCKET_NAME = \'<YOUR AWS S3 BUCKET NAME>\u2019\nkey = \u2018hello1.txt\u2019\nclient = boto3.client(\n    \u2018s3\u2019,\n    aws_access_key_id=ACCESS_KEY,\n    aws_secret_access_key=SECRET_KEY)\ns3 = boto3.resource(\u2018s3\u2019)\nversions = s3.Bucket(BUCKET_NAME).object_versions.filter(Prefix=key)\ntransfer = S3Transfer(client)\nfor version in versions:\n    obj = version.get()\n    print(obj[\u2018LastModified\u2019].strftime("%Y%m%d%H%M%S")+ "_" + key)\n    transfer.download_file(BUCKET_NAME, key, \n    obj[\u2018LastModified\u2019].strftime("%Y%m%d%H%M%S")+ "_" + key, extra_args={\u2018VersionId\u2019: obj[\u2018VersionId\u2019] })\n')))}p.isMDXComponent=!0},436:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return a?o.a.createElement(u,s(s({ref:t},l),{},{components:a})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<r;l++)c[l]=a[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);