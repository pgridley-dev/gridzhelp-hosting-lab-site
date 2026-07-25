async function loadManifest() {
  const ids = {
    release: "release-version",
    releaseName: "release-name",
    environment: "environment",
    repo: "repository",
    schema: "schema-version",
    date: "released-at",
    target: "deployment-target",
    url: "public-url"
  };

  try {
    const response = await fetch("release-manifest.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Manifest request failed: ${response.status}`);
    const data = await response.json();

    document.getElementById(ids.release).textContent = data.release;
    document.getElementById(ids.releaseName).textContent = data.release_name;
    document.getElementById("release-method").textContent = data.deployment_method.includes("GitHub") ? "AUTOMATION STAGED" : "MANUAL DEPLOYMENT";
    document.getElementById("release-status").textContent = data.status.toUpperCase();
    document.getElementById(ids.environment).textContent = data.environment;
    document.getElementById("environment-label").textContent = `${data.environment} environment`;
    document.getElementById("source-branch").textContent = `Branch: ${data.source_branch}`;
    document.getElementById(ids.repo).textContent = data.source_repository;
    document.getElementById(ids.schema).textContent = data.schema_version;
    document.getElementById(ids.date).textContent = data.released_at;
    document.getElementById(ids.target).textContent = data.deployment_target;
    document.getElementById(ids.url).textContent = data.public_url;
    document.getElementById("https-status").textContent = data.ssl.hostname_https === "working" ? "Working" : data.ssl.hostname_https;
    document.getElementById("redirect-status").textContent = `Force redirect: ${data.ssl.force_https_redirect.replaceAll("_", " ")}`;
    document.getElementById("manifest-message").textContent = "Manifest loaded successfully. Release metadata is no longer hard-coded into the dashboard.";
    document.getElementById("footer-release").textContent = `${data.release} · ${data.release_name}`;
  } catch (error) {
    document.getElementById("manifest-message").textContent = `Manifest unavailable: ${error.message}`;
    document.getElementById("release-status").textContent = "ERROR";
    console.error(error);
  }
}
loadManifest();
