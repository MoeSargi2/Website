<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Generate - EZdorks</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="http://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="assets/css/generate.css">
    <script src="https://shoppy.gg/api/embed.js"></script>
</head>

<body>
    <ul class="widget">
            <li class="widget-discord">
                <a href="https://discord.gg/KPwhgPa">
                    <span class="icon is-medium">
                        <i class="mdi mdi-discord mdi-36px"></i>
                    </span>
                </a>
            </li>
        </ul>
    <nav class="navbar navbar-light navbar-expand bg-light navigation-clean">
        <div class="container"><a class="navbar-brand" href="/">EZdorks</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <div class="dropdown ml-auto">
                    <a class="btn btn-primary mr-2" role="button" href="https://shoppy.gg/@EZdork">Pricing</a>
                    <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button">Dork Tools</button>
                    <div role="menu" class="dropdown-menu">
                        <a role="presentation" href="#" class="dropdown-item active">Generate</a>
                        <a role="presentation" href="/tool.html" class="dropdown-item">Dork Filter</a>
                        <a role="presentation" href="/separator.html" class="dropdown-item">Dork Separator</a>
                        <a role="presentation" href="/owngenerate.html" class="dropdown-item">Own Dorkgen</a>
                        <a role="presentation" href="/ezparser.html" class="dropdown-item">EZparser</a>
                        <a role="presentation" href="/keyworder.html" class="dropdown-item">Keyword Scraper</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="masthead text-white text-center" style="">
        <div class="reminder" id="reminder" style="display: block;">
            <p><strong>We recommend using the latest versions of <var>Chrome</var>, <var>Opera</var> or <var>Firefox (Recommended)!</var></strong></p>
        </div>

        <div class="overlay"></div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-6 m-auto">
                    <div class="input-group form">
                        <input type="text" class="form-control eztextinput" placeholder="Token, Please?" id="token" aria-describedby="token">
                        <div class="input-group-append">
                            <button class="btn ezbutton" type="button" onclick="generatilizion()">Generate!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
    function generatilizion()
    {
        let token = document.getElementById("token").value;
        document.getElementById("token").value = "";
        if(token == "") return $.notify("Please AUTHORIZE yourself with a token!", "error");

        $.notify("The Dorks are GENERATING.", "info");

        $.ajax({
            url: `https://ezdorks.xyz/ezdorks/generateDorks/${token}`,
            type: "GET",
            error: function(error){
                console.log(error.responseJSON);
                $.notify(error.responseJSON.error_message, "error");
            },
            success: function(result){
                console.log(result);
                $.notify(`Generated ${result.result.length} dorks!`, "success");
                let text = result.result.join("\n");
                let element = document.createElement('a');
                element.setAttribute('href', window.URL.createObjectURL(new Blob([text], {type: 'text/plain'})));
                element.setAttribute('download', `EZdorks-generator.txt`);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                $.notify(`DOWNLOADING your generated Dorks.`, "info");
        }}); 
    }
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/bs-animation.js"></script>
    <script src="assets/js/notify.js"></script>
</body>

</html>
