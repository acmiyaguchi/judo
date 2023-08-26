# judo

This repository is for preserving code related to my studies in judo.
See the website at [judo.acmiyaguchi.me](https://judo.acmiyaguchi.me).

## notes

### dependencies

```bash
brew install tesseract ffmpeg gifski b2-tools
```

To upload files into the public backblaze bucket:

```bash
b2 authorize-account

# sync everything but the tmp directory and DS_Store files
b2 sync ./data b2://acm-judo/data --excludeDirRegex data/tmp --excludeRegex DS_Store
rsync -r data/datasets app/static
```

### olympic results

- https://digital.la84.org/digital/collection/p17103coll8
