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

### detectron experiments

- https://detectron2.readthedocs.io/en/latest/tutorials/install.html

Due to silly constraints, we can't install this directly via poetry.
Shell into the poetry environment and install it manually:
See https://github.com/facebookresearch/detectron2/issues/4409

```bash
poetry shell
pip install 'git+https://github.com/facebookresearch/detectron2.git'
```
